@component('mail::message')
# Introduction

Vous avez reçu une nouvelle demande de devis le {{ date('d-m-Y') }} à {{ date('H:i:s') }}.

{!! $demande !!}

Merci, <br>
@endcomponent
