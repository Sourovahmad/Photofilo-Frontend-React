<?php

namespace App\Http\Controllers;

use App\Http\Requests\authenticationRequest;
use App\Models\User;
use Illuminate\Http\Request;

class authenticationController extends Controller
{
    public function register_post(authenticationRequest $request)
    {
        $user = new User;
        $user->email = $request->email;

        if(!is_null($request->surname)){
            $fullname = $request->name . ' ' . $request->surname;
        } else {
            $fullname = $request->name;
        }
        $user->name = $fullname;
        $birthDate = $request->year . '-'. $request->month . '-' . $request->date;
        $user->birth_date = $birthDate;
        $user->password = bcrypt($request->password);
        $user->save();
    }
}
