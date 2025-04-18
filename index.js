/*▄────────▄
  █        █
  █  Ядро  █
  █        █
  ▀────────▀*/
    if (!Object.getOwnPropertyDescriptor(global, '$')) {
        global.$ = class {
        /*┌─────────────────────────────────────────────────────────────┐
          │ Добавляет коллекцию констант в глобальную область видимости │
          └─────────────────────────────────────────────────────────────┘*/
            static set global(collection) {
            // Проходим по коллекции констант
                Object.entries(new collection).forEach((item) => {
                // Добавляем элемент коллекции в глобальную область видимости
                    Object.defineProperty(global, item[0], {
                        value: item[1]
                    });
                });
            }
        };
    }
    
/*▄────────────────────────────────────────▄
  █                                        █
  █  Добавляет глобальный вывод в консоль  █
  █                                        █
  ▀────────────────────────────────────────▀*/
    if (!Object.getOwnPropertyDescriptor(global, '_')
    &&  !Object.getOwnPropertyDescriptor(global, '__')) {
        Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
    }
    