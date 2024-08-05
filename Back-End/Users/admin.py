from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from Users.models import User
from Users.forms import UserCreationForm, UserChangeForm


class UserAdmin(BaseUserAdmin):
    list_display = ['__str__', 'is_active', 'is_admin']
    list_filter = ['is_active', 'is_admin']
    search_fields = ['__str__']
    add_form = UserCreationForm
    add_fieldsets = (
        (
            None, {
                "classes": ['wide'], "fields": [
                    'phone_number', 'first_name', 'last_name', 'password1', 'password2'
                ],
            },
        ),
    )
    form = UserChangeForm
    fieldsets = (
        (None, {"fields": ['phone_number', 'email', 'password']}),
        ("Personal Info", {"fields": ['first_name', 'last_name', ]}),
        ("Permissions", {"fields": ['is_active', 'is_admin', ]})
    )

    ordering = ['-id']
    filter_horizontal = []


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
