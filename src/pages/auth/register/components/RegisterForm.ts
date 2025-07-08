import UserInformation from "@/pages/auth/register/components/components/UserInformation.vue";
import ConfirmPassword from "@/pages/auth/register/components/components/ConfirmPassword.vue";
import {ref, computed} from "vue";

const steps = [
    {title: 'User Information', component: UserInformation},
    {title: 'Confirm Password', component: ConfirmPassword},
];
const currentStep = ref(0);
const nextStep = () => {
    currentStep.value++;
};
const prevStep = () => {
    if (currentStep.value > 0) {
        currentStep.value--;
    }
};


const canProceed = computed(() => {
    return true;
});

export {
    steps,
    currentStep,
    nextStep,
    prevStep,
    canProceed,
}