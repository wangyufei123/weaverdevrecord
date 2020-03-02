import store from 'store'

const USER_KEY = 'user_key';

export default {
    saveUser(user) {
        store.set(USER_KEY, user);//内部会自动转换成json 再保存
    },
    getUser() {
        return store.get(USER_KEY) || {}
    },
    removeUser() {
        store.remove(USER_KEY)
    }
}