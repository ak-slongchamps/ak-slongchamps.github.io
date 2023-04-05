window.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header');
    header.innerHTML = `
    <nav id="navigation">
      <div class="m-container">
        <div class="m-row">
          <a href="#" id="m-navbar-brand" class="m-col-t-9 m-col-m-none m-left-m">ak-slongchamps</a>
          <a id="m-navbar-show" href="#navigation" title="Show navigation" class="m-col-t-3 m-hide-m m-text-right"></a>
          <a id="m-navbar-hide" href="#" title="Hide navigation" class="m-col-t-3 m-hide-m m-text-right"></a>
          <div id="m-navbar-collapse" class="m-col-t-12 m-show-m m-col-m-none m-right-m">
            <div class="m-row">
              <ol>
                <li><a href="/articles/index.html">Articles</a></li>
                <li><a href="https://github.com/ak-slongchamps">Github</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </nav>
    `;

    document.head.innerHTML = document.head.innerHTML + `
    <link rel="stylesheet" href="/m-dark.compiled.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,400i,600%7CSource+Sans+Pro:400,400i,600&amp;subset=latin-ext" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    `;
});