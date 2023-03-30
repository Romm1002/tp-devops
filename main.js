const btn = document.getElementById('save');

btn.addEventListener('click', () => {
  const lastname = document.getElementById('lastname').value;
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  let error = 0;

  if (!isEmailValid(email)) {
    document.getElementById('errorEmail').innerHTML = 'email non valide';
    document.getElementById('errorEmail').style.color = 'red';
    error++;
  } else {
    document.getElementById('errorEmail').innerHTML = '';
  }

  if (!isNameValid(lastname)) {
    document.getElementById('errorLastname').innerHTML = 'Nom non valide';
    document.getElementById('errorLastname').style.color = 'red';
    error++;
  } else {
    document.getElementById('errorLastname').innerHTML = '';
  }

  if (!isNameValid(firstname)) {
    document.getElementById('errorFirstname').innerHTML = 'Prénom non valide';
    document.getElementById('errorFirstname').style.color = 'red';
    error++;
  } else {
    document.getElementById('errorFirstname').innerHTML = '';
  }

  if (!isCommentValid(comment)) {
    document.getElementById('errorComment').innerHTML = 'Commentaire non valide';
    document.getElementById('errorComment').style.color = 'red';
    error++;
  } else {
    document.getElementById('errorComment').innerHTML = '';
  }

  if (error == 0) {
    document.getElementById('form').style.display = 'none';
    const result = document.getElementById('results');
    result.style.display = 'block';
    result.querySelector('#result_lastname').innerHTML = 'Prénom : ' + lastname;
    result.querySelector('#result_firstname').innerHTML = 'Nom : ' + firstname;
    result.querySelector('#result_email').innerHTML = 'Email : ' + email;
    result.querySelector('#result_comment').innerHTML = 'Commentaire : ' + comment;
  }
});

function isEmailValid(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function isNameValid(name) {
  const nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(name);
}

function isCommentValid(comment) {
  return comment.trim() !== '';
}
