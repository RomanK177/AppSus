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

function changeClicked(mailId) {
    const mail = gMails.find(mail => mail.id === mailId);
    mail.isClicked = (mail.isClicked) ? false : true
        // utilService.storeToStorage(STORAGE_KEY, gMails)
    return Promise.resolve()
}

<<<<<<< HEAD


function saveMail(mail) {
=======
function sendMail(mail) {
>>>>>>> 4d5907c115bf4277cee5eed473c8580569e699c6
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
    return { id: '', subject: '', body: '', from: '', to: '', isSent: true, isClicked: false, isRead: false, sentAt: null }
}

function _createMails() {
    if (localStorage.getItem(STORAGE_KEY)) return utilService.loadFromStorage(STORAGE_KEY)
    const mails = []
    mails.push(_createMail('I know what you did!', 'I saw the body and the blood marks. You have one day to bring me the money. Asshole...', 'Roman'));
    mails.push(_createMail('Order is ready', 'Come and get your shit.', 'PizaHus'));
    mails.push(_createMail('KAPARA', 'Bo be imsha, al tihie eled.', 'Danielle'));
    mails.push(_createMail('SPAM SPAM ', 'Lorem stuffff comercial bla bla', 'Johny'));
    utilService.storeToStorage(STORAGE_KEY, mails)
    return mails;
}

function _createMail(subject, body, from) {
    const mail = {
        id: utilService.makeId(),
        subject,
        body,
        from,
        isSent: false,
        isClicked: false,
        isRead: Math.random() > 0.5,
        sentAt: Date.now()
    }
    return mail;
}