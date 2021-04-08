import Auth from './Auth.js';
import { requestJson } from './utilities.js';

const auth = new Auth();

// login
document.forms.login.addEventListener('submit', (e) => {
  e.preventDefault();
  auth.login(getPosts);
});


// post new message
document.forms.message.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title');
  const content = document.getElementById('content');
  const msgBody = { title: title.value, content: content.value };
  await requestJson('posts', {method: 'post', body: JSON.stringify(msgBody)});
  getPosts();
  title.value = '';
  content.value = '';
});

// get posts from database
document.getElementById('getPosts').addEventListener('click', getPosts);

/**
 * Get Posts from database and render them
 */
async function getPosts() {
  const postsJson = await requestJson('posts');
  const postsDiv = document.getElementById('posts');
  postsDiv.innerText = '';
  
  for (const p of postsJson) {
    const div = document.createElement('div');
    postsDiv.appendChild(div);
    div.innerText = `${p.title}: ${p.content}`;
  }
}