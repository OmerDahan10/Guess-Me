var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    if (!loadFromStorage('Quests tree')) {

        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
        saveToStorage('Quests tree', gQuestsTree);
    } else {
        gQuestsTree = loadFromStorage('Quests tree');
        gCurrQuest = gQuestsTree;

    }
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = getCurrQuest();
    gCurrQuest = (res === 'yes') ? gCurrQuest.yes : gCurrQuest.no;
}

function addGuess(newQuestTxt, newGuessTxt, lastRes = 'no') {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    gCurrQuest.no = createQuest(gCurrQuest.txt);
    gCurrQuest.txt = newQuestTxt;
    gCurrQuest.yes = createQuest(newGuessTxt);

    saveToStorage('Quests tree', gQuestsTree);
}

function getCurrQuest() {
    return gCurrQuest
}

function getQuestsTree() {
    return gQuestsTree();
}