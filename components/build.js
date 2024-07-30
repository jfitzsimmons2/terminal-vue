const path = require('path')
const { build } = require('vite')
const glob = require('glob');
const vue = require('@vitejs/plugin-vue');

glob('./**/package.json', { ignore: ["./node_modules/**/package.json"]}, function (err, files) {
  if (err) {
    console.log(err);
  }

  // 👇️ ['src/file-2.js', 'src/file-3.js', 'src/file.js']
  console.log(files);
  
  files.forEach(file => {
    
    const name = require(file).name;
    console.log(name);
    if (name !== 'terminalvue') {
      
       build({
          build: {
            outDir: `${name}/dist`,
            lib: {
              entry: path.resolve(__dirname, `${name}/index.ts`),
              formats: ['es','cjs','iife'],
              name,
              fileName: (format) => `${name}.${format}.js`
            },
            rollupOptions: {
              external: ['vue'],
              output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                  vue: 'Vue'
                }
              }
            }
          },
          plugins: [vue()]
        })
      }
    
  });
});
