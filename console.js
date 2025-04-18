/*▄────────────────────────────────────────▄
  █                                        █
  █  Добавляет глобальный вывод в консоль  █
  █                                        █
  ▀────────────────────────────────────────▀*/
    if (!Object.getOwnPropertyDescriptor(global, '_')
    &&  !Object.getOwnPropertyDescriptor(global, '__')) {
        Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
    }
