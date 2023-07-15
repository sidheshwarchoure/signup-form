import React from 'react';
import SignupForm from './signupForm';
import './components/style.css'

const App = () => {
  return (
    <div class="container">
      <div class="left">
        <img src="https://s3-alpha-sig.figma.com/img/b7a1/8134/8459f263a3beba150e98cf2b2582bda7?Expires=1690156800&Signature=TMx~diqSzAWDnePDbERMKe0mUjoQj6bNUVjortHNu8uWsnXaRXTDV5eV9gPWGc4czy9mOrWvfAwJRe-VGZRF3Jc~JIthqj9AtVRdO-xcGkS9nVYIukjjkwpx4dXUDc8saN14NlUfUaqGxoLroXv1spD~gj038uSlwRASG0YWbQAGuRV0O2Zd2zZZ3inlj5UefUukH61eQEry1wJHtAmgAL~Ct-fXSSOmrJhG0YSrsNFPQgdRS79nnxtaWpvatGjKK-4M9u4REPXfCgTKBrEps-zWugTEgZyzO01fVKisDo6ozF007PtnpX5CHmHLaMMwhzMZ-4m9~bxWasL~o7B5oQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"width={461} height={502}></img>
      </div>
      <div class='right'>
        <h1>Create Account</h1>
        <SignupForm />
      </div>
    </div>
    
  );
};

export default App;
