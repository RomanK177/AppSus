import { utilService } from "../../../services/util-service.js";

const STORAGE_KEY = "mailsDB";


const gMails = _createMails()

export const mailService = {
    getById,
    getMails,
    removeMail,
    sendMail,
    getEmptyMail,
    changeRead,
    changeStar,
    changeClicked,
}

function getById(id) {
    const mail = gMails.find(currMail => currMail.id === id)
    return Promise.resolve(mail)
}

function getMails() {
    return Promise.resolve(gMails);
}

function removeMail(mailId) {
    const idx = gMails.findIndex(mail => mail.id === mailId);
    gMails.splice(idx, 1);
    utilService.storeToStorage(STORAGE_KEY, gMails)
    return Promise.resolve()
}

function changeRead(mailId) {
    const mail = gMails.find(mail => mail.id === mailId);
    mail.isRead = (mail.isRead) ? false : true
    utilService.storeToStorage(STORAGE_KEY, gMails)
    return Promise.resolve()
}

function changeStar(mailId) {
    const mail = gMails.find(mail => mail.id === mailId);
    mail.isStar = (mail.isStar) ? false : true
    utilService.storeToStorage(STORAGE_KEY, gMails)
    return Promise.resolve()
}

function changeClicked(mailId) {
    const mail = gMails.find(mail => mail.id === mailId);
    mail.isClicked = (mail.isClicked) ? false : true
        // utilService.storeToStorage(STORAGE_KEY, gMails)
    return Promise.resolve()
}

function sendMail(mail) {
    if (mail.id) {
        const mailIdx = gMail.findIndex(currMail => mail.id === currMail.id)
        gMails.splice(mailIdx, 1, mail)
        utilService.storeToStorage(STORAGE_KEY, gMails)
    } else {
        mail.id = utilService.makeId();
        gMails.unshift(mail);
        utilService.storeToStorage(STORAGE_KEY, gMails)
    }
    return Promise.resolve(mail)
        // return Promise.reject('Big Badabum');
}

function getEmptyMail() {
    return { id: '', subject: '', body: '', from: 'Me', to: '', isSent: true, isClicked: false, isRead: true, sentAt: null }
}

function _createMails() {
    if (localStorage.getItem(STORAGE_KEY)) return utilService.loadFromStorage(STORAGE_KEY)
    const mails = []
    mails.push(_createMail('I know what you did!', 'I saw the body and the blood marks. You have one day to bring me the money. Asshole...', 'Roman', true));
    mails.push(_createMail('Order is ready', 'Come and get your shit.', 'PizaHus'));
    mails.push(_createMail('KAPARA', 'Bo be imsha, al tihie eled.', 'Danielle'));
    mails.push(_createMail('SPAM SPAM ', 'Lorem stuffff comercial bla bla', 'Johny'));
    mails.push(_createMail('Congrats! ', 'You have successfully finished the cource! You are now a fullstack developer! You are going to get a shitload of money and bitches!', 'Coding'));
    mails.push(_createMail('Soul oferring ', 'Dear Satan, I am willing to sell my soul to you if you help me to pass this course. Please get back to me ASAP. thanks.', 'Me', true, true, true));
    mails.push(_createMail('Tired.. ', 'Hi watup? So tired from this cource mann .. We are going to get so wasted when I am done!!!', 'Me', false, true, true));
    utilService.storeToStorage(STORAGE_KEY, mails)
    return mails;
}

function _createMail(subject, body, from, isStar = false, isSent = false, isRead = false) {
    const mail = {
        id: utilService.makeId(),
        subject,
        body,
        from,
        isStar,
        isSent,
        isClicked: false,
        isRead,
        sentAt: Date.now()
    }
    return mail;
}