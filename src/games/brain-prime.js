import whatIsYourName from '../cli.js';
import { randomNumber } from '../index.js';
import { question } from '../index.js';
import { check } from '../index.js';

const userName = whatIsYourName();//ввод имени мользователя и приветствие
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainPrime = (n = randomNumber()) => {
    question(n);
    let correctAnswer = '';
    let flag = 0;
    if (n > 1) {
        for (let i = 2; i < n; i++) {
          if (n % i == 0) {
            flag = 0;
            break;
          }
          else{
            flag = 1;
          }
        }
    }
    else {
        flag = 0;
    }
    if (flag === 1){
        correctAnswer = 'yes';
    }
    else{
        correctAnswer = 'no';
    }

    check(brainPrime, userName, correctAnswer);//передача в функцию сравнения результата с ответом игрока 
}

export default brainPrime;