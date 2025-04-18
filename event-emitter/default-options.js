/*▄────────────────────▄
  █                    █
  █  Загрузка модулей  █
  █                    █
  ▀────────────────────▀*/
const EventEmitter = require('events');

/*▄───────────────────────────────────────────────▄
  █                                               █
  █  Добавляет EventEmitter и опции по умолчанию  █
  █                                               █
  ▀───────────────────────────────────────────────▀*/
class DefaultOptions extends EventEmitter {
/*┌────────────────────┐
  │ Опции по умолчанию │
  └────────────────────┘*/
    static defaultOptions = {}
    
/*┌─────────────┐ 
  │ Конструктор │
  └─────────────┘*/
    constructor(options = {}) {
    // Вызываем конструктор родителя
        super();
        
    // Сохраняем опции с учетом значений по умолчанию
        this.options = { ...this.constructor.defaultOptions, ...options };
    }
}

/*▄───────────▄
  █           █
  █  Экспорт  █
  █           █
  ▀───────────▀*/
module.exports = {get DefaultOptions() {
    return DefaultOptions;
}};
