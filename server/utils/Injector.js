/**
 * Dependencies injector.
 *
 * @author Anton Shramkov anton.shramkov@gmail.com
 */


'use strict';

const TYPE_VALUE = 'value',
      TYPE_CLASS = 'class',
      TYPE_SINGLETON = 'singleton';


/**
 *
 */
class Injector
{
    /**
     *
     * @param container
     * @param config
     */
    constructor(container, config) {
        Object.defineProperty(this, '__container', {
            value: container,
            __proto__: null
        });
        if (config) {
            this.register(config);
        }
    }

    /**
     *
     * @param dependencies
     * @returns {Injector}
     */
    register(...dependencies) {
        dependencies.forEach(config => {
            if(!config.key) {
                throw new Error('Key is not specified.');
            } else if (!config.type) {
                throw new Error('Type is not specified.');
            } else if (!config.value) {
                throw new Error('Value is not specified.');
            }
            if(config.force) {
                this.__container.delete(config.key);
                this.__container.set(config.key, config);
            } else {
                if (!this.__container.has(config.key)) {
                    this.__container.set(config.key, config);
                }
            }
        });

        return this;
    }

    /**
     *
     * @param config
     * @param needConstructor
     * @returns {*}
     * @private
     */
    __resolve(config, needConstructor = false) {
        let Constructor;

        switch(config.type) {
        case TYPE_VALUE:
            return config.value;
        case TYPE_CLASS:
            Constructor = this.__issueConstructor(config);

            return needConstructor
                ? Constructor
                : new Constructor;
        case TYPE_SINGLETON:
            if(typeof config.value == 'object') {
                if(needConstructor) {
                    return config.value.constructor;
                }
                return config.value;
            }

            Constructor = this.__issueConstructor(config);

            if(needConstructor) {
                return Constructor;
            }

            this.register({
                key: config.key,
                type: TYPE_SINGLETON,
                value: new Constructor,
                force: true
            });

            return this.__container.get(config.key).value;
        }
    }

    /**
     *
     * @param config
     * @returns {*}
     * @private
     */
    __issueConstructor(config) {
        let Constructor = this.getConstructor(null, config.value),
            dependencies = [];

        if(config.args) {
            config.args.forEach(val => {
                if(this.__container.has(val)) {
                    val = this.__resolve(this.__container.get(val));
                }

                dependencies.push(val);
            })
        }

        return new Proxy(Constructor, {
            construct(target, args) {
                return new target.prototype.constructor(
                    ...dependencies.concat(args)
                );
            }
        });
    }

    /**
     *
     * @param key
     * @returns {*}
     */
    get(key) {
        return this.__resolve(this.__container.get(key));
    }

    /**
     *
     * @param key
     * @param args
     */
    new(key, ...args) {
        let Constructor = this.__resolve(this.__container.get(key), true);

        return new Constructor(...args);
    }

    /**
     *
     * @param key
     * @param value
     * @returns {*}
     */
    getConstructor(key, value = null) {
        let target = value
            ? value
            : this.__resolve(this.__container.get(key), true);

        if (typeof target == 'function') {
            return target;
        } else if(typeof target == 'string') {
            return require(target);
        } else if (typeof target == 'object') {
            return target.constructor;
        } else {
            throw new Error('There is no constructor.');
        }
    }

}

const proxy = new Proxy(Injector, {
    construct(target, args) {
        return new target.prototype.constructor(new Map(), ...args);
    }
});

module.exports = proxy;