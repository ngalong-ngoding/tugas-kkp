export const ROLES = {
    KARYAWAN: "karyawan",
    LEADER: "leader", 
    ADMIN: "admin"
}

export const dummyUsers = {
    [ROLES.KARYAWAN] : {
        id: 1, 
        nama: "Muhammad Nur Majid",
        email: "muhammadnurmajid160@gmail.com",
        nomorInduk: 260615, 
        role: ROLES.KARYAWAN, 
        leaderId: 2, 
    }, 
    [ROLES.LEADER] : {
        id: 1, 
        nama: "leader tim b",
        email: "leader@gmail.com",
        nomorInduk: 260612, 
        role: ROLES.LEADER, 
        leaderId: null, 
    }, 
    [ROLES.ADMIN] : {
        id: 1, 
        nama: "admin",
        email: "admin@gmail.cpm",
        nomorInduk: 260616, 
        role: ROLES.ADMIN, 
        leaderId: null, 
    }, 

}