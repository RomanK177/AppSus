const gMails = []

export const mailService = {
    getById,
    getMails,
    removeMail,
    saveMail,
    getEmptyMail,
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
    return Promise.resolve()
}

function saveMail(mail) {
    if (mail.id) {
        const mailIdx = gMail.findIndex(currMail => mail.id === currMail.id)
        gMails.splice(mailIdx, 1, mail)
    } else {
        mail.id = utilService.makeId();
        gMails.unshift(mail);
    }
    return Promise.resolve(mail)
        // return Promise.reject('Big Badabum');
}

function getEmptyMail() {
    return { id: '', subject: '', body: '', isRead: false, sentAt: null }
}