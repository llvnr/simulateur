<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\DemandeDevis;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/demande-devis', function(Request $request) {

    $recapitulatif = $request->recap;

    Mail::to('evasion.ceo@gmail.com')->send(new DemandeDevis($recapitulatif));

    return response()->json(["status" => 200, "success" => true, "message" => "Félicitation, votre simulation a bien été enregistrer.", "data" => $recapitulatif]);

});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
