"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DanhSachNhanVien_1 = require("./DanhSachNhanVien");
var NhanVien_1 = require("./NhanVien");
var dsnv = new DanhSachNhanVien_1.DanhSachNhanVien();
function ThemNhanVien() {
    var maNV = document.getElementById('maNhanVien').value;
    var tenNV = document.getElementById('hoTen').value;
    var luongCB = parseInt(document.getElementById('luongCB').value);
    var loaiNV = 1;
    var loaiNVRad = document.getElementsByClassName('loaiNhanVien');
    // for(let i = 0; i< loaiNVRad.length; i++){
    //   if(loaiNVRad[i].checked){
    //     loaiNV = loaiNVRad[i].value;
    //   }
    // }
    for (var _i = 0, loaiNVRad_1 = loaiNVRad; _i < loaiNVRad_1.length; _i++) {
        var rdCheck = loaiNVRad_1[_i];
        if (rdCheck.checked) {
            loaiNV = rdCheck.value;
        }
    }
    var nhanVien = new NhanVien_1.NhanVien(maNV, tenNV, luongCB, loaiNV);
    dsnv.ThemNhanVien(nhanVien);
    CapNhatDanhSachNhanVien();
}
var btnThemNV = document.getElementById('btnThemNhanVien');
btnThemNV.addEventListener('click', ThemNhanVien);
function CapNhatDanhSachNhanVien() {
    var tbDanhSachNhanVien = document.getElementById('danhSachNhanVienContent');
    tbDanhSachNhanVien.innerHTML = '';
    for (var _i = 0, _a = dsnv.MangNhanVien; _i < _a.length; _i++) {
        var nhanvien = _a[_i];
        var tdMaNV = TaoTD('maNV', nhanvien.MaNhanVien);
        var tdTenNV = TaoTD('maNV', nhanvien.HoTen);
        var tdluongCBNV = TaoTD('maNV', nhanvien.LuongCB);
        var tdloaiNV = TaoTD('maNV', nhanvien.layLoaiTenNhanVien());
        var tinhTongLuong = TaoTD('maNV', nhanvien.TinhLuong());
        var trNhanVien = document.createElement('tr');
        trNhanVien.appendChild(tdMaNV);
        trNhanVien.appendChild(tdTenNV);
        trNhanVien.appendChild(tdluongCBNV);
        trNhanVien.appendChild(tdloaiNV);
        trNhanVien.appendChild(tinhTongLuong);
        tbDanhSachNhanVien.appendChild(trNhanVien);
    }
}
function TaoTD(classname, value) {
    var td = document.createElement('td');
    td.className = classname;
    td.innerHTML = value;
    return td;
}
