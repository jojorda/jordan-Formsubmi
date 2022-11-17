function submitAja() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

  if (name == '') {
    return alert('Name Mohon di isi');
  } else if (email == '') {
    return alert('Email Mohon di isi');
  } else if (phone == '') {
    return alert('Phone Mohon di isi');
  } else if (subject == '') {
    return alert('Subject Mohon di isi');
  } else if (message == '') {
    return alert('Message Mohon di isi');
  }

  let emailReciver = 'sayapusingnih@gmail.com';

  let a = document.createElement('a');

  a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello Nama saya ${name}, No.hp: ${phone}, Bagian: ${subject}, Pesan: ${message}`;
  a.target = '_blank';
  a.click();
}