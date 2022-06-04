@extends('dashboard.dashboard')

@section('content')

<div class="p-6 sm:px-20 bg-white border-b border-gray-200">
    <div>
        <!-- <img src="{{ asset('images/GCC logo.png') }}" /> -->
    </div>

    <div class="mt-8 text-2xl">
        Welcome to GCC admin dashboard
    </div>

    <div class="mt-6 text-gray-500">
        GCC is a tournament platform for whom fights among the pros. this dashboard is used for create, read, update and
        delete data for the client page. please be gentle and responsible due to credential of the data and informations
    </div>
</div>
@endsection