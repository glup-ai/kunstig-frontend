import a from './images/munch/1.png'
import b from './images/munch/2.png'
import c from './images/munch/3.png'
import d from './images/munch/4.png'
import e from './images/munch/5.png'
import f from './images/munch/6.png'
import g from './images/munch/7.png'
import h from './images/munch/8.png'
import i from './images/munch/9.png'
import j from './images/munch/10.png'
import k from './images/munch/11.png'
import l from './images/munch/12.png'
import m from './images/munch/13.png'
import n from './images/munch/14.png'
import o from './images/munch/15.png'
import p from './images/munch/16.png'

const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p]

export const mockImage = () => images[Math.round(Math.random() * images.length)];

export const pingServer = () => {
    fetch("https://glup-stig-wa.azurewebsites.net/")
        .then(response => response.json())
        .then(data => console.log(data));
}