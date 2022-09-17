import React from 'react';
const Veil = () =>{
  return (
    <div className="main">
      <h2>spectral audio encryption</h2>
      <img src={require('../images/veilApp.png')}/>
      <h2>Abstract</h2>
      <p>Veil (2016) is a collection of software and hardware instruments for adaptable, open source, and real-time audio encryption. The system is built on the principles of a monoalphabetic substitution cypher and applies them to spectral sound data. While this tool should not be used for sensitive transmissions (files encrypted using this system can be descrambled quite quickly), the methods described here serve to open a dialogue around homebrew anti-surveillance tools and to propose new pathways for the making of sound art and music responsive to our current social climate. The research provided here is accompanied by Max and Pure Data patches— as well as a pseudocode description of the algorithm which can be useful, hopefully, in its application to other programming environments.</p>
      <h2>Introduction</h2>
      <p>The programming of Veil was initiated in response to readings around the Arab Spring and the activities of 'hacktivist' groups such as Anonymous. Growing from a realization that networked environments to which we are increasingly dependent are prone to eavesdropping and manipulation, I wanted to experiment with building an awareness around DIY privacy tools and potentially encourage a free flow of liberatory information. As a sound artist and programmer with a knowledge of methods in digital signal processing, my natural inclination was to look to the Frequency Domain as a potential area for gainful experimentation. The following section of this paper details how frequency content of input audio can be scrambled and saved in an obfuscated state and how it can be shipped to and de-scrambled by the intended recipient. Later sections of this research concern themselves with musical and artful dealings with the software.</p>
      <h2>The Algorithm</h2>
      <p>The algorithm, inspired by a reading of Simon Singh's The Code Book (1999), applies one of the oldest forms of data obfuscation, the monoalphabetic substitution cipher, to a spectral audio context. This method of scrambling works by substituting letters of the common alphabet with a non-repeating sequence of alternative alphabetic symbols or pictographs. Individuals with the substitution alphabet can use the sequence as a lookup table to reveal the encoded message.
      Figure 1 below displays the common alphabet alongside a randomly generated substitution alphabet. Figure 2 shows how the substitution alphabet may be used to encode plaintext into unintelligible "code" (ciphertext). Using this alternative alphabet, the word "spectral" becomes "kgqaldop".</p>
      <p>Figure 1</p>
        <table>
          <tr>
            <th>plain alphabet</th>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td>g</td>
            <td>h</td>
            <td>i</td>
            <td>j</td>
            <td>k</td>
            <td>l</td>
            <td>m</td>
            <td>n</td>
            <td>o</td>
            <td>p</td>
            <td>q</td>
            <td>r</td>
            <td>s</td>
            <td>t</td>
            <td>u</td>
            <td>v</td>
            <td>w</td>
            <td>x</td>
            <td>y</td>
            <td>z</td>

          </tr>
          <tr>
            <th>substitution alphabet</th>
            <td>o</td>
            <td>t</td>
            <td>a</td>
            <td>e</td>
            <td>q</td>
            <td>b</td>
            <td>w</td>
            <td>n</td>
            <td>i</td>
            <td>r</td>
            <td>j</td>
            <td>p</td>
            <td>f</td>
            <td>v</td>
            <td>z</td>
            <td>g</td>
            <td>m</td>
            <td>d</td>
            <td>k</td>
            <td>l</td>
            <td>y</td>
            <td>h</td>
            <td>x</td>
            <td>u</td>
            <td>s</td>
            <td>c</td>
          </tr>
        </table>

        <p>Figure 2</p>
        <table>
          <tr>
            <th>plain text</th>
            <td>s</td>
            <td>p</td>
            <td>e</td>
            <td>c</td>
            <td>t</td>
            <td>r</td>
            <td>a</td>
            <td>l</td>
          </tr>
          <tr>
            <th>cipher text</th>
            <td>k</td>
            <td>g</td>
            <td>q</td>
            <td>a</td>
            <td>l</td>
            <td>d</td>
            <td>o</td>
            <td>p</td>
          </tr>
        </table>
        <p>Without knowing the original message, the recipient of the message is able to rewrite "kgqaldop" as "spectral" using the substitution cipher to descramble.</p>
        <p>How can we then apply this process to sound? What can we determine as our "alphabet" in a sonic context? And lastly, what non-destructive process can we imagine to substitute that alphabet with another?</p>
        <p>The Fourier Transform provides us with an approximation of complex audio signals as a sum of quantifiable, differently pitched-sinusoidal partials, evenly spaced along the audible frequency spectrum— we will refer to these individual measurements of spectral content as frequency bins.</p>
        <p>If we can control the order in which these voices fall, we would be able to determine a new, alternative sequence for partials to produce a scrambled audio recording. We can think of the plain alphabet in this context as the original position of the sinusoidal-partial. We may store a randomly-generated alternative position of the frequency bin in an ordered list (saved as a .txt file) that a decryption process can use to return the scrambled frequency bins to their original sequence.</p>

      <p><strong>Musical Applications</strong></p>
      <p>The act of sonic encryption, or frequency scrambling (my computer science friends will say that this term is more appropriate) is first and foremost a political act. It positions itself against a hegemony that has determined it must be able to listen to everyone, all the time and at all cost. And while this spirit of activism leads this particular curiosity and investigation, it doesn't precede my goal for the exploration with this material to be musical.</p>

      <p>The environment with which I have chosen to program Veil, Max/MSP, was developed for the production of computer music and often used for poetic manipulation of data towards the synthesis of adventurous new sounds. The encryption applet provided in the programming resources with this paper allows you to generate new substitution ciphers with the click of a single button, making the encounter of harmonically interesting permutations of the frequency spectrum an easy and fast process.</p>
      <p>In my own practice, I use Veil to create compositions for guitar that blend the original instrumental source with its encrypted voice. This music I make has its basis in the tradition of ambient guitar music, though I insert discordant moments by disrupting the natural properties and balance of the instrument’s spectral qualities with the algorithm. Both the original source and encrypted voices are treated with additional processing such as filters, convolution reverb and delay, to accentuate and embellish the harmonic interplay between plain and encrypted sound.</p>
      <p>The development of structure in the compositions begin by first selecting a substitution sequence for the spectrum and by experimenting with motifs on the guitar that draw interesting tensions from the introduction of the encrypted sound. I then combine those motifs along with more improvisational and extended techniques to produce a recording of the piece. Along with the final digital artifact, I view the substitution cipher, saved as a text (.txt) file, both a byproduct of and “score” for the composition in its determination of how certain melodic devices are reordered in that particular playthrough.</p>


    </div>
  );
}
export default Veil;
