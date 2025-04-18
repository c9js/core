/*▄────────────────────▄
  █                    █
  █  Загрузка модулей  █
  █                    █
  ▀────────────────────▀*/
const path = require('path');

/*▄─────────────────────────────────────────────────────────▄
  █                                                         █
  █  Импортирует инициализатор движков и логических единиц  █
  █                                                         █
  ▀─────────────────────────────────────────────────────────▀*/
module.exports = (config) => new class Init {
/*┌───────────────────────────────┐
  │ Инициализирует список движков │
  └───────────────────────────────┘*/
    engines = (main, engines = []) => {
    // Проходим по списку движков
        for (const engineName of engines) {
        // Извлекаем части пути
            const parts = config.engines(engineName);
            
        // Получаем полный путь
            const enginePath = path.join(module.parent.path, ...parts);
            
        // Импортируем движок
            const Engine = require(enginePath);
            
        // Инициализируем движок
            const engine = new Engine(main);
            
        // Проходим по списку методов
            Object.keys(engine).forEach((method) => {
            // Добавляем только методы
                if (typeof engine[method] == 'function') {
                    main[method] = engine[method];
                }
            });
        }
    }
    
/*┌─────────────────────────────────────────┐
  │ Инициализирует список логических единиц │
  └─────────────────────────────────────────┘*/
    units = (engine, units = []) => {
    // Извлекаем имя текущего движка
        const engineName = engine.constructor.name.replace('Engine', '');
        
    // Проходим по списку логических единиц
        for (const unitName of units) {
        // Извлекаем части пути
            const parts = config.units(engineName.toLowerCase(), unitName);
            
        // Получаем полный путь
            const unitPath = path.join(module.parent.path, ...parts);
            
        // Импортируем логическую единицу
            const Unit = require(unitPath);
            
        // Инициализируем логическую единицу
            engine[`${unitName}${engineName}`] = new Unit(engine);
        }
    }
};
