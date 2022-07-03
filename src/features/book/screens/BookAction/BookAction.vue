<template>
	<div class="book-action bg-white shadow radius-5">
		<h2 class="title-action">Thêm sách</h2>
		<form action="" class="form-action">
			<div class="form-left">
				<div class="form-group">
					<label for="" class="label-form">Tên cuốn sách</label>
					<input type="text" placeholder="Tên cuốn sách" class="input-form" />
				</div>
				<div class="form-group">
					<label for="" class="label-form">Giá</label>
					<input type="number" placeholder="Giá" class="input-form" min="0" />
				</div>
				<div class="form-group">
					<label for="" class="label-form">Trạng thái</label>
					<div class="group-radio">
						<div
							v-for="status in statusBook"
							:key="status.id"
							class="radio-box"
						>
							<input
								type="radio"
								:id="status.id"
								name="status"
								:value="status.id"
								checked
							/>
							<label :for="status.id">{{ status.name }}</label>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label for="" class="label-form">Thời gian</label>
					<div class="group-date">
						<div>
							<label for="">Bắt đầu</label>
							<input type="date" class="input-form" />
						</div>
						<div>
							<label for="">Kết thúc</label>
							<input type="date" class="input-form" />
						</div>
					</div>
				</div>
			</div>

			<div class="form-right">
				<div class="form-group">
					<label for="" class="label-form">Ảnh</label>
					<input type="file" class="input-form input-file" />

					<img
						src="https://cdn.pixabay.com/photo/2022/06/22/16/10/cathedral-7278228__340.jpg"
						alt=""
						width="200px"
						height="250px"
						class="image-preview"
					/>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { STATUS_BOOK } from "../../constants/book.constants";
export default {
	data() {
		return {
			statusBook: STATUS_BOOK,
		};
	},
};
</script>

<style></style>
