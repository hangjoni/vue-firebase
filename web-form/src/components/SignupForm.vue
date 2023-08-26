<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" v-model="email" required>

    <label>Password:</label>
    <input type="password" v-model="password" required>
    <div class="error" v-if="passwordError !== ''">{{ passwordError }}</div>

    <label>Role:</label>
    <select id="role" v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" required>
    <div class="pill" v-for="skill in skills" :key="skill"  @click="removeSkill($event, skill)">{{ skill }}</div>

    <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
        <button>Submit</button>
    </div>
  </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            if ((e.key === "," || e.key === "Enter") && this.tempSkill && ! this.skills.includes(this.tempSkill)) {
                if (e.key === ",") {
                    this.tempSkill = this.tempSkill.slice(0, -1)
                }
                this.skills.push(this.tempSkill);
                this.tempSkill=''
            }
        },
        removeSkill(e, s) {
            this.skills = this.skills.filter((x) => x !== s)
        },
        handleSubmit() {
            this.passwordError = this.password.length > 5 ? 
            '' : "Password must be at least 6 chars long"
            

        }
    }

}
</script>

<style>
form {
    max-width: 430px;
    margin: 30px auto;;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select, option {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    border-radius: 0;
    font-size: 0.8em;
}
.terms {
    margin-top: 1rem;
    display: flex;
    justify-content: left;
    align-items: center;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 10px 5px;
    padding: 5px 10px;
    background: #eee;
    border-radius: 10px;
    opacity: 0.8
}
.error {
    color: red;
}
</style>