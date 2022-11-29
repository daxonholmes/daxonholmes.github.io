(() => {
    // Check which section of the article the reader is currenlty on.
    if(window.location.pathname+window.location.hash == '/github-pages-how-to.html#create-repository') {
       let createRepo = document.getElementById('link-create-repo');
       createRepo.classList.add('reading-active');
       console.log("reading create repository")
    } else if(window.location.pathname+window.location.hash == '/github-pages-how-to.html#clone-repository') {
        let cloneRepo = document.getElementById('link-clone-repo');
        cloneRepo.classList.add('reading-active');
        console.log("reading clone repository")
    } else if(window.location.pathname+window.location.hash == '/github-pages-how-to.html#create-index') {
        let createIndex = document.getElementById('link-create-index');
        createIndex.classList.add('reading-active');
        console.log("reading create index")
    } else if(window.location.pathname+window.location.hash == '/github-pages-how-to.html#add-commit-push') {
        let addCommitPush = document.getElementById('link-add-commit-push');
        addCommitPush.classList.add('reading-active');
        console.log("reading add commit push")
    }
});