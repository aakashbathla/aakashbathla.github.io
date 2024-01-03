A VuePress site is in fact a single-page application (SPA) powered by Vue and Vue Router.

Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.
