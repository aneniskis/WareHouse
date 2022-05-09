export default function getNewId() {
    let id = localStorage.getItem('db_1');
    if (null === id) {
        localStorage.setItem('db_1', 1);
        return 1;
    }
    id = parseInt(id);
    id++;
    localStorage.setItem('db_1', id);
    return id;
}