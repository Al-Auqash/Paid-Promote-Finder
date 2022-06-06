<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlowsProcessTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flow_process', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->unsignedBigInteger("flow_id");
            $table->foreign("flow_id")->references('id')->on('flows')->onDelete('cascade');
            $table->unsignedBigInteger("ad_id");
            $table->foreign("ad_id")->references('id')->on('ads')->onDelete('cascade');
            $table->string("created_by");
            $table->string("mdb");
            $table->string("mdd");
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
        Schema::dropIfExists('process');
    }
}
