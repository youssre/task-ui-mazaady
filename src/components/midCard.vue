<template>
  <div class="container">
    <div class="card p-4 mt-4">
        <div class="text-right">
            <!-- <img src="@/assets/Group-11399.svg" alt=""> -->
            <div class="title">بيانات الدفعة والالتزامات</div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">قيمة الشيك</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">القيمة الفعلية للعقار</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">قيمة الزيادة</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">قيمة الدفعة</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">نسبة الدفع</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">المبلغ</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">الصافى للعميل</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">عجز العميل</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <hr class="hr mt-4" />
        <div class="text-right my-3">
            <div class="title">بيانات تساهيل</div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">بطاقة الفيزا</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">قرض سيارة</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">قرض شخصى</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">قرض عقارى</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">بنك التسليف</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">أخرى</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">اجمالى المديونية</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">نسبة الرهن</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">المبلغ</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">نسبة السعى</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">المبلغ</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">القيمة المضافة</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">الرسوم الادارية</label>
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="card p-4 mt-4 mb-5">
        <div class="row">
            <div class="head">بيانات الطلب</div>
        </div>
        <div class="row mt-3">
            <div class="col-4 form-group">
                <label for="" class="label">نوع الطلب</label>
                <select class="form-select" name="" id="">
                    <option value="1">شراء</option>
                    <option value="1">بيع</option>
                </select>
            </div>
            <div class="col-4 form-group">
                <label for="" class="label">مصدر المعاملة</label>
                <input type="text" placeholder="صديق" class="form-control">
            </div>
            <div class="col-4 form-group">
                <label for="" class="label"><img class="mx-2" src="@/assets/Group-11482.svg" alt=""/>تصنيف المعاملة</label>
                <select class="form-select" name="" id="">
                    <option value="1">تعذر الاتصال</option>
                    <option value="1">اتصال ناجح</option>
                </select>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 form-group">
                <label for="" class="label"><img class="mx-2" src="@/assets/Group-11482.svg" alt=""/>الملاحظة</label>
                <input type="text" placeholder="الملاحظة" class="form-control">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "midCard",
    setup() {
        return {

        }
    }
}
</script>

<style>
.container{
    width: 1070px !important;
}
.title{
    font-weight: 500;
    font-size: 16px;
}
.label{
    font-size: 14px;
    line-height: 2.1;
    font-weight: 300;
}
.head{
    padding: 10px;
    text-align: center;
    background-color: #3F0E40;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 500;
}
.form-select{
    background-position: left 0.50rem center !important;
    padding-right: 12px !important;
    direction: rtl !important;
    font-weight: 300 !important;
    color: #555555 !important;
}
.form-control {
    padding-right: 12px !important;
    font-weight: 300 !important;
    color: #555555 !important;
}
</style>