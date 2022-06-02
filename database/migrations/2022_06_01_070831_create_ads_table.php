<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->bigIncrements("ad_id");
            $table->string("title");
            $table->unsignedBigInteger("category_id");
            $table->foreign("category_id")->references("category_id")->on("categories");
            $table->unsignedBigInteger("region_id");
            $table->foreign("region_id")->references("region_id")->on("regions");
            $table->string("time");
            $table->text("description");
            $table->string("created_by");
            $table->string("created_date");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ads');
    }
}
