function hitungTabungan(uang, tahun, bunga) {
    uang = document.getElementById("uang").value
    tahun = document.getElementById("tahun").value
    bunga = document.getElementById("bunga").value
    let persentaseBunga = bunga/100, jumlah = Math.floor(uang * Math.pow(1 + persentaseBunga, tahun))

    if (!uang || !tahun || !bunga || typeof uang !== 'number' || typeof tahun !== 'number' || typeof bunga !== 'number') {
        document.getElementById("tabungan").innerHTML = `parameter belum diisi dengan benar`
        return;
    }

    document.getElementById("tabungan").innerHTML = `Anda akan memiliki jumlah tabungan bernilai Rp. ${jumlah.toLocaleString()} jika anda menabung sejumlah Rp. ${uang.toLocaleString()} dengan lama ${tahun.toLocaleString()} tahun dengan bunga simpanan sebesar ${bunga.toLocaleString()}%`
}

function hitungPensiun(umur) {
    umur = document.getElementById("umur").value
    let sisaTahun = 60 - umur, pensiun = 10000000000 / (sisaTahun * Math.pow(1.05, sisaTahun)), pensiunPerBulan = pensiun / 12

    if (!umur || typeof umur !== 'number') {
        document.getElementById("pensiun").innerHTML = `parameter belum diisi dengan benar`
        return;
    }
    
    document.getElementById("pensiun").innerHTML = `Anda harus menyisihkan uang sebesar Rp. ${Math.floor(pensiun).toLocaleString()} per tahun atau Rp. ${Math.floor(pensiunPerBulan).toLocaleString()} per bulan untuk ditabung ke dalam rekening pensiun anda.` 
}