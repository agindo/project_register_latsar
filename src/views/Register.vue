<template>
    <div>
        <h3>Register</h3>
        <vue-tabs type="pills">
            <v-tab title="1. Form Isian">
<form>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">NIP</label>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="">
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Nama Lengkap</label>
        <div class="col-sm-7">
            <input type="text" class="form-control" placeholder="">
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Tempat, Tanggal Lahir</label>
        <div class="col-sm-9">
            <div class="form-row">
                <div class="form-group col-md-5">
                    <input type="text" class="form-control" placeholder="">
                </div>
                <div class="form-group col-md-3">
                    <input type="date" class="form-control" placeholder="">
                </div>
            </div>
        </div>
    </div>
    <fieldset class="form-group">
        <div class="row">
            <legend class="col-form-label col-sm-3 text-right pt-0">Jenis Kelamin</legend>
            <div class="col-sm-9">
                <!-- <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                    <label class="form-check-label" for="gridRadios1">
                        Pria
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                        Wanita
                    </label>
                </div> -->
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" name="customRadioInline1" class="custom-control-input">
                    <label class="custom-control-label">Pria</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" name="customRadioInline1" class="custom-control-input">
                    <label class="custom-control-label">Wanita</label>
                </div>
            </div>
        </div>
    </fieldset>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Agama</label>
        <div class="col-sm-2 pr-0">
            <select class="custom-select">
                <option selected>Pilih</option>
                <option value="1">Islam</option>
                <option value="2">Kristen Protestan</option>
                <option value="3">Hindu</option>
                <option value="3">Budha</option>
                <option value="3">Kristen Katolik</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Instansi</label>
        <div class="col-sm-7">
            <input type="text" class="form-control" placeholder="">
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Jabatan</label>
        <div class="col-sm-5">
            <input type="text" class="form-control" placeholder="">
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Pangkat / Golongan</label>
        <div class="col-sm-7">
            <input type="text" class="form-control" placeholder="">
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Nama Mentor</label>
        <div class="col-sm-5">
            <input type="text" class="form-control" placeholder="">
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Email</label>
        <div class="col-sm-5">
            <input type="text" class="form-control" placeholder="">
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">No.Telp/Hp</label>
        <div class="col-sm-3">
            <input type="text" class="form-control" placeholder="">
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Alamat</label>
        <div class="col-sm-7">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Kebutuhan Khusus</label>
        <div class="col-sm-2">
            <select class="custom-select">
                <option selected>Pilih</option>
                <option value="1">Hamil</option>
                <option value="2">Difabel</option>
                <option value="3">Sakit Keras</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Ukuran Seragam</label>
        <div class="col-sm-1 pr-0">
            <select class="custom-select">
                <option selected>Pilih</option>
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="3">XL</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </div>
</form>
            </v-tab>
            <v-tab title="2. Upload Dokumen">
<form>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Surat Tugas</label>
        <div class="col-sm-9">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">SK CPNS</label>
        <div class="col-sm-9">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">SKP</label>
        <div class="col-sm-9">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Surat Keterangan Kesehatan</label>
        <div class="col-sm-9">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Surat Pernyataan</label>
        <div class="col-sm-9">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-3 col-form-label text-right">Foto</label>
        <div class="col-sm-9">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </div>
</form>
            </v-tab>
            <!-- <v-tab title="Third tab">
                Third tab content
            </v-tab> -->
        </vue-tabs>
    </div>
</template>
<script>
import {VueTabs, VTab} from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
export default {
    components: {VueTabs, VTab}
}
</script>