"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVien = void 0;
var NhanVien = /** @class */ (function () {
    function NhanVien(HoTen, MaNhanVien, LoaiNhanVien, LuongCB) {
        this.HoTen = HoTen;
        this.MaNhanVien = MaNhanVien;
        this.LoaiNhanVien = LoaiNhanVien;
        this.LuongCB = LuongCB;
    }
    NhanVien.prototype.TinhLuong = function () {
        //this.LuongTongCong =  this.LuongCB;
        var tongLuong = 0;
        switch (this.LoaiNhanVien) {
            case 1: {
                tongLuong = this.LuongCB;
                break;
            }
            case 2: {
                tongLuong = this.LuongCB * 1.5;
                break;
            }
            case 3: {
                tongLuong = this.LuongCB * 3;
                break;
            }
            default: {
                tongLuong = this.LuongCB;
                break;
            }
        }
        return tongLuong;
    };
    NhanVien.prototype.layLoaiTenNhanVien = function () {
        switch (this.LoaiNhanVien) {
            case 1: {
                return 'Nhân Viên Thường';
            }
            case 2: {
                return 'Quản Lý';
            }
            case 3: {
                return 'Giám Đốc';
            }
            default: {
                return 'Nhân Viên Thường';
            }
        }
    };
    return NhanVien;
}());
exports.NhanVien = NhanVien;
