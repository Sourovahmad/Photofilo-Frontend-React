<?php

namespace App\Http\Controllers;

use App\Http\Requests\authenticationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class authenticationController extends Controller
{

    // Authentication for react  App

    public function api_register(authenticationRequest $request)
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
        $user->role_id = 3;
        $user->country = $request->country;
        $user->save();

        $token = $user->createToken('myapitoken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token,
        ];
        return response($response, 201);
    }






    // admin part laravel
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
        $user->role_id = 3;
        $user->country = $request->country;
        $user->save();

        $credentials = $request->only('email', 'password');
        Auth::attempt($credentials);

        return redirect('prfile')->withSuccess('Register Success');
    }

    public function registerGet()
    {
        return view('auth.register');
    }
    public function loginGet()
    {
        return view('auth.login');
    }




    public function login_post(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->intended('profile')
                        ->withSuccess('Signed in');
        }

        return redirect("login")->withSuccess('Login details are not valid');
    }


    public function signout()
    {
        session()->flush();
        Auth::logout();
        return Redirect('login');

    }


}
