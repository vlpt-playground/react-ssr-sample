const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fakeData = [
  {
    id: 1,
    title: 'hello',
    body: 'hello, hello, hello!'
  },
  {
    id: 2,
    title: 'world',
    body: 'what a beautiful world'
  },
  {
    id: 3,
    title: 'hello ssr!',
    body: 'ssr? ssr!'
  },
  {
    id: 4,
    title: 'hello code splitting!',
    body: 'code splitting + ssr = complex'
  }
];

export const getArticles = async () => {
  console.log('getting articles');
  await delay(1000);
  return fakeData.map(article => ({ id: article.id, title: article.title }));
};

export const getArticle = async id => {
  console.log('getting article', id);
  await delay(400);
  return fakeData.find(article => article.id === id);
};
