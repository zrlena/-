const fs = require('fs-extra');
const toMs = require('ms');

/**
 * Add premiumgp user.
 * @param {string} userId 
 * @param {string} expired 
 * @param {object} _premi
 */
const addPremiumGp = (userId, expired, _premi) => {
    const obj = { id: userId, expired: Date.now() + toMs(expired) }
    _premi.push(obj)
    fs.writeFileSync('./src/premiumgp.json', JSON.stringify(_premi))
}

/**
 * Get premium user index position.
 * @param {string} userId
 * @param {object} _dir 
 * @returns {Number}
 */
const getPremiumPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get premium user expired.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {Number}
 *//*
const getPremiumExpired = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}
*/
/**
 * Check if is user premium.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {boolean}
 */
const checkPremiumGp = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking premium.
 * @param {object} _dir 
 *//*
const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`O  premium do Grupo ${_dir[position].id} expirou`)
            _dir.splice(position, 1)
            fs.writeFileSync('./src/premiumgp.json', JSON.stringify(_dir))
        }
    }, 1000)
}
*/
/**
 * Get all premium user ID.
 * @param {object} _dir 
 * @returns {string[]}
 */
const getAllPremiumGp = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}
/**
 * Check if is user premium.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {boolean}
 */
 const checkOwner = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

module.exports = {
    addPremiumGp,
    getPremiumPosition,
    checkPremiumGp,
    getAllPremiumGp,
    checkOwner
}
