(function() {
  'use strict';
  
    var app = {
        test: {
           heading: 'Тест по программированию',
            question: [
                {
                    heading: 'Вопрос №1',
                    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
                },
                {
                    heading: 'Вопрос №2',
                    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
                },
                {
                    heading: 'Вопрос №3',
                    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
                }           
            ]
        },
        
        createTest: function() {
            var form = document.createElement('form'),
                header = document.createElement('h1'),
                btn = document.createElement('button'),
                list = document.createElement('ol');
                
            header.classList.add('text-center');

            list.classList.add('container');

            btn.classList.add('bg-info', 'btn', 'btn-lg', 'center-block');

            header.textContent = this.test.heading;

            btn.textContent = 'Проверить мои результаты'; 

            for (var i = 0; i < this.test.question.length; i++){
                var result = this.createQuestion(this.test.question[i]);
                list.append(result);
                }
            
                form.append(header, list, btn);
            
            return form;
        },
        
        createQuestion: function (test){
            var point = document.createElement('li'),
                header = document.createElement('h3'),
                blockList = document.createElement('ul');
            
            header.textContent = test.heading;
            
            for (var i = 0; i < test.answer.length; i++){
                var item = document.createElement('li'),
                    label = document.createElement('label'),
                    check = document.createElement('input');
                
                label.classList.add('checkbox-inline');
                
                check.setAttribute('type', 'checkbox');
                label.append(check, document.createTextNode(test.answer[i]));
                
                item.append(label);
                blockList.append(item);
            }
            
            point.append(header, blockList);
            
            return point;
        }
        
    };
    
  var root = document.getElementById('root');
      root.append(app.createTest());
})(); 
