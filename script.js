const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//Redefinindo o tamanho do canvas:
canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height) 