/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from "./Item";

class Inventory {
    constructor() {
        this.items = [];
    }

    /**
     * Menambahkan item ke dalam daftar items.
     * @param {Item} item - Objek item yang akan ditambahkan.
     */
    addItem(item) {
        this.items.push(item);
    }

    /**
     * Menghapus item berdasarkan ID.
     * @param {number} id - ID dari item yang akan dihapus.
     */
    removeItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }

    /**
     * Mengembalikan daftar item dalam bentuk string dengan memanggil method displayDetails dari setiap item.
     * @returns {string} - Daftar item yang dipisahkan dengan newline.
     */
    listItems() {
        return this.items.map((item) => item.displayDetails()).join('\n');  // Memanggil displayDetails dari setiap instance
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
