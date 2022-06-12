@extends('layouts.user_type.auth')

@section('content')
    <div class="container-fluid py-4">
        <div class="card">
            <div class="card-header pb-0 px-3">
                <h6 class="mb-0">{{ __('Create Category') }}</h6>
            </div>
            <div class="card-body pt-4 p-3">
                <form action="{{ route('ad.update', $ads->id) }}" method="POST" role="form text-left" enctype="multipart/form-data">
                    @csrf
                    @if ($errors->any())
                        <div class="mt-3  alert alert-primary alert-dismissible fade show" role="alert">
                            <span class="alert-text text-white">
                                {{ $errors->first() }}</span>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <i class="fa fa-close" aria-hidden="true"></i>
                            </button>
                        </div>
                    @endif
                    @if (session('success'))
                        <div class="m-3  alert alert-success alert-dismissible fade show" id="alert-success" role="alert">
                            <span class="alert-text text-white">
                                {{ session('success') }}</span>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <i class="fa fa-close" aria-hidden="true"></i>
                            </button>
                        </div>
                    @endif
                    <input hidden value="{{ Auth::id() }}" name="created_by" >
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="user-name" class="form-control-label">{{ __('Title') }}</label>
                                <div class="@error('user.name') border border-danger rounded-3 @enderror">
                                    <input class="form-control" value="{{ old('title') ?? $ads->id}}" type="text"
                                        placeholder="Title" name="title" autocomplete="off">
                                    @error('name')
                                        <p class="text-danger text-xs mt-2">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="user-name" class="form-control-label">{{ __('Category') }}</label>
                                <div class="@error('user.name') border border-danger rounded-3 @enderror">
                                    <select name="category_id" class="form-select" aria-label="category" aria-placeholder="Category">
                                        <option selected disabled hidden>Category</option>
                                        @forelse($categories as $item)
                                            <option value="{{ $item->id }}">{{ $item->category_name }}</option>
                                        @empty
                                            <option value="">No Data Found</option>
                                        @endforelse
                                    </select>
                                    @error('name')
                                        <p class="text-danger text-xs mt-2">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="user-name" class="form-control-label">{{ __('Region') }}</label>
                                <div class="@error('user.name') border border-danger rounded-3 @enderror">
                                    <select name="region_id" class="form-select" aria-label="region" aria-placeholder="Region">
                                        <option selected disabled hidden>Region</option>
                                        @forelse($regions as $item)
                                            <option value="{{ $item->id }}">{{ $item->region_name }}</option>
                                        @empty
                                            <option value="">No Data Found</option>
                                        @endforelse
                                    </select>
                                    @error('name')
                                        <p class="text-danger text-xs mt-2">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="user-name" class="form-control-label">{{ __('Time') }}</label>
                                <div class="@error('user.name') border border-danger rounded-3 @enderror">
                                    <input class="form-control" value="{{ old('time') }}" type="text"
                                        placeholder="Time" name="time" autocomplete="off">
                                    @error('name')
                                        <p class="text-danger text-xs mt-2">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    {{-- <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="user-name" class="form-control-label">{{ __('Status') }}</label>
                                <div class="@error('user.name') border border-danger rounded-3 @enderror">
                                    <input class="form-control" value="{{ old('status') }}" type="text"
                                        placeholder="Status" name="status" autocomplete="off">
                                    @error('name')
                                        <p class="text-danger text-xs mt-2">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div> --}}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="about">{{ 'Description' }}</label>
                                <div class="@error('user.about')border border-danger rounded-3 @enderror">
                                    <textarea class="form-control" id="description" rows="3" placeholder="Description" name="description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn bg-gradient-dark btn-md mt-4 mb-4">{{ 'Save' }}</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
@endsection
