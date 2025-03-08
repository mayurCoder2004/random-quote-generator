const quote = document.getElementById('quote');
        const author = document.getElementById('author');
        
        async function getQuote() {
            const api_url = 'https://api.allorigins.win/get?url=' + encodeURIComponent(`https://zenquotes.io/api/random?timestamp=${new Date().getTime()}`);
            quote.innerHTML = "Loading...";
            author.innerHTML = "";
            
            const response = await fetch(api_url);
            const data = await response.json();
            const quotes = JSON.parse(data.contents);
            
            quote.innerHTML = `"${quotes[0].q}"`;
            author.innerHTML = `- ${quotes[0].a}`;
        }
        
        function tweet() {
            const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.innerText + " " + author.innerText)}`;
            window.open(tweetURL, "_blank");
        }

        function copyToClipboard() {
            const text = `${quote.innerText} ${author.innerText}`;
            navigator.clipboard.writeText(text).then(() => {
                alert("Quote copied to clipboard!");
            });
        }

        function speakQuote() {
            let speech = new SpeechSynthesisUtterance(quote.innerText + " by " + author.innerText);
            window.speechSynthesis.speak(speech);
        }
        
        getQuote();