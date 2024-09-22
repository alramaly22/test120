from django.shortcuts import render, redirect
from django.http import HttpResponse
import stripe
from django.conf import settings

# إعداد مفتاح API الخاص بـ Stripe مباشرة هنا
stripe.api_key = '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'

YOUR_DOMAIN = "http://127.0.0.1:8000"

def index(request):
    return render(request, 'checkout.html')

def create_checkout_session(request):
    if request.method == 'POST':
        price_id = request.POST.get('price_id')  # الحصول على معرف السعر من الطلب

        try:
            # إنشاء جلسة Stripe Checkout
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[
                    {
                        'price': price_id,  # استخدام معرف السعر المرسل
                        'quantity': 1,
                    },
                ],
                mode="subscription",  # تغيير إلى 'subscription' للاشتراك
                success_url=YOUR_DOMAIN + "/success/",
                cancel_url=YOUR_DOMAIN + "/cancel/",
            )
            # إعادة توجيه إلى صفحة Stripe Checkout
            return redirect(checkout_session.url, code=303)
        except Exception as e:
            return HttpResponse(f"An error occurred: {str(e)}")

    return HttpResponse("Invalid request", status=400)

def success(request):
    return render(request, 'success.html')

def cancel(request):
    return render(request, 'cancel.html')
