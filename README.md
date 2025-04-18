# Шаблоны комментариев для кода

---

## getMessage()
```js
/*┌──────────────────┐
  │ Возвращает <...> │
  └──────────────────┘*/
    getMessage() {
    }
    
// Получаем <...>
    this.getMessage();
```

## extractMessage()
```js
/*┌─────────────────┐
  │ Извлекает <...> │
  └─────────────────┘*/
    extractMessage() {
    }
    
// Извлекаем <...>
    this.extractMessage();
```

## setMessage()
```js
/*┌──────────────┐
  │ Задает <...> │
  └──────────────┘*/
    setMessage() {
    }
    
// Задаем <...>
    this.setMessage();
```

## updateMessage()
```js
/*┌─────────────────┐
  │ Обновляет <...> │
  └─────────────────┘*/
    updateMessage() {
    }
    
// Обновляем <...>
    this.updateMessage();
```

## addMessage()
```js
/*┌─────────────────┐
  │ Добавляет <...> │
  └─────────────────┘*/
    addMessage() {
    }
    
// Добавляем <...>
// Добавляем новый <...>
    this.addMessage();
```

## createMessage()
```js
/*┌───────────────┐
  │ Создает <...> │
  └───────────────┘*/
    createMessage() {
    }
    
// Создаем <...>
    this.createMessage();
```

## removeMessage()
```js
/*┌───────────────┐
  │ Удаляет <...> │
  └───────────────┘*/
    removeMessage() {
    }
    
// Удаляем <...>
    this.removeMessage();
```

## checkMessage()
```js
/*┌─────────────────┐
  │ Проверяет <...> │
  └─────────────────┘*/
    checkMessage() {
    }
    
// Проверяем <...>
    this.checkMessage();
```

## clearMessages()
```js
/*┌───────────────────┐
  │ Очищает все <...> │
  └───────────────────┘*/
    clearMessages() {
    }
    
// Очищаем все <...>
    this.clearMessages();
```

## catch()
```js
/*┌─────────────────────────┐
  │ Обрабатывает исключение │
  └─────────────────────────┘*/
    catch(error) {
    // Ошибка уже обработана
        if () {
        }
        
    // Обрабатываем ошибку
        else {
        }
        
    // Возвращаем сообщение об ошибке
        throw ...;
    }
    
// Обрабатываем <...>
    .then(res => this.response(res)).catch(
    // Ошибка при обработке <...>
        error => _catch(error)
    )
```

## Комментарии в методе
```js
    updateMessage(message) {
    // Список локальных переменных
        let size; // Общая длина
        let min;  // Минимальная длина
        let max;  // Максимальная длина
        
    // Создаем список <...>
        const list = [];
        
    // Определяем значение по умолчанию для <...>
        message = message || '';
        
    // Определяем <...>
        const size = message.length;
        
    // Проверяем <...>
        min = min < 1 ? 1 : min;
        max = max > 9 ? 9 : max;
        
    // Получаем <...>
        size = size ? 0 : min + max;
        
    // Переводим <...> в <...>
    // Переводим в <...>
    // Переводим в строку
        messages = messages.map(message => String(message));
        
    // Обнуляем <...>
        messages = [];
        
    // Запускаем обработчик <...>
        while (true) {
        }
        
    // Проходим по списку <...>
        for (let i = 0; i < list.length; i++) {
        }
        
    // Выполняем обработчик <...>
        if (typeof this.events.onUpdateMessage == 'function') {
            this.events.onUpdateMessage(message);
        }
    }
```

## Экспортный класс
```js
/*▄────────────────────▄
  █                    █
  █  Загрузка модулей  █
  █                    █
  ▀────────────────────▀*/
const EventEmitter = require('events');

/*▄─────────────────▄
  █                 █
  █  Создает <...>  █
  █                 █
  ▀─────────────────▀*/
module.exports = class extends EventEmitter {
/*┌─────────────┐
  │ Конструктор │
  └─────────────┘*/
    constructor() {
    // Вызываем конструктор родителя
        super();
    }
};
```

## События
```js
/*┌────────────────────────────┐
  │ Обработчик получения <...> │
  └────────────────────────────┘*/
    data = (packet) => {
    // Не удалось получить <...>
        if (packet.error) {
        }
        
    // Сообщаем о получении <...>
        this.emit('data', Buffer.from(packet));
    }
    
// Добавляем обработчик получения <...>
this.on('data', (packet) => {
    console.log(`Получен новый <...>: ${packet.length}`);
});
```
