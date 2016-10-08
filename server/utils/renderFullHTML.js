export default function renderFullHTML(componentHTML, initialState, config) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Make your own delicious pizza!">
            <link rel="shortcut icon" href="/static/favicon.ico"/>
            <title>Pizza constructor</title>
            <link rel="stylesheet" href="${config['STATIC_URL']}/static/build/main.css">
        </head>
        <body>
            <div id="body">${componentHTML}</div>
            <script type="application/javascript">
                window.__CONFIG__ = ${JSON.stringify(config)};
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
            </script>
            <script type="application/javascript" src="${config['STATIC_URL']}/static/build/main.js"></script>
        </body>
        </html>
    `;
}
