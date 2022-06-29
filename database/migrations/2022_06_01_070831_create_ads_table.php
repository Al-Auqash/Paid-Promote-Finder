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
            $table->bigIncrements("id");
            $table->string("title");
            $table->unsignedBigInteger("category_id");
            $table->foreign("category_id")->references("id")->on("categories");
            $table->unsignedBigInteger("region_id");
            $table->foreign("region_id")->references("id")->on("regions");
            $table->unsignedBigInteger("status_id");
            $table->foreign("status_id")->references("id")->on("statuses");
            // $table->string("time");
            $table->date('start_date');
            $table->date('finish_date');
            $table->text("description");
            $table->string("image_path");
            $table->string("created_by");
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
