const parser = new DOMParser();
// console.log('parser', parser);

const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
 //console.log('xmlString', xmlString);

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = listNode.querySelector("name");
const firstNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");
//console.log('listNode', listNode);
//console.log('listNode', studentNode);
//console.log('listNode', second);


const langAttr = nameNode.getAttribute('lang');
//console.log('listNode', langAttr);

//const result = {
//name: firstNode.textContent + ' ' + secondNode.textContent,
//age: Number(ageNode.textContent),
//profesion: profNode.textContent,
//lang: langAttr
//};

const result = Array.from(listNode.querySelectorAll('student')).map(student => {
  return {
    name: `${student.querySelector('first').textContent}   ${student.querySelector('second').textContent}`,
    age: Number(student.querySelector('age').textContent),
    profesion: `${student.querySelector('prof').textContent}`,
    lang: `${student.querySelector('lang')}`
  }
})

console.log('list', result);

