const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

function sortBands(arr) {
  return arr.slice().sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));
}

document.addEventListener('DOMContentLoaded', () => {
  const sorted = sortBands(bands);
  const ul = document.getElementById('band');
  sorted.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
});
