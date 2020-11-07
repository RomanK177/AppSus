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
    mails.push(_createMail('Order is ready', 'Your pizza is ready! The delivery will arrive to you within 20 minutes or less!', 'PizzaHut'));
    mails.push(_createMail('Postmates', 'Danielle, are you looking for a job? You can make $29.99 an hour, working with postmates!', 'Postmates'));
    mails.push(_createMail('Projects For You', 'You have 29 projects that match your profile. Log in to your profile to view possible casting opportunities','Actors Access'));
    mails.push(_createMail('Amazon Delivery', 'Your package is due to arrive in 2 business days! Thank you for shopping with Amazon! ', 'Amazon'));
    mails.push(_createMail('Bank Statement', 'Your bank statement is available! You have to make a minimum payment of $239.00 by December 31st in order to keep your credit card in good standings!', 'Wells Fargo'));
    mails.push(_createMail('November Glam Bag ', 'Your November glam bag is on the way! To check the status of your package, look at the reference code that was texted to you! ', 'IPSY'));
    mails.push(_createMail('Our Wedding', 'Thanks so much for attending our wedding! We love the gift, and cannot wait to see you soon! ', 'The Cohens'));
    mails.push(_createMail('Congrats!','You have successfully finished the course! You are now a fullstack developer! Your Certificate is attatched below. We cannot wait to see what you accomplish!', 'Coding'));
    mails.push(_createMail('Soul oferring ', 'Dear Satan, I am willing to sell my soul to you if you help me pass this course. Please get back to me ASAP. thanks.', 'Me', true, true, true));
    mails.push(_createMail('Keys', 'Hi Mr.Johnson, I need a new set of keys! My old roommate took the only copy I have, thank you! ', 'Me', false, true, true));
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