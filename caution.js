
let firstHR= document.getElementsByTagName('hr')[0];
let newAnchor= document.createElement('a');
let newHref= document.createAttribute('href');
newHref.value= 'https://code.jsoftware.com/wiki/Vocabulary/ObsoleteSyntax';
newAnchor.setAttributeNode(newHref);
let newClass= document.createAttribute('class');
newClass.value= 'caution';
newAnchor.setAttributeNode(newClass);
newAnchor.appendChild(document.createTextNode('caution'));
document.body.insertBefore(newAnchor, firstHR);
